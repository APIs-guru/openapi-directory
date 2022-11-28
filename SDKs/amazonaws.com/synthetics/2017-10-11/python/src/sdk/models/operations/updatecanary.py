from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateCanaryPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCanaryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodyCode:
    r"""UpdateCanaryRequestBodyCode
    Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
    """
    
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Handler') }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Key') }})
    s3_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Version') }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipFile') }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodyRunConfig:
    r"""UpdateCanaryRequestBodyRunConfig
    A structure that contains input information for a canary run.
    """
    
    active_tracing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveTracing') }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentVariables') }})
    memory_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemoryInMB') }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutInSeconds') }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodySchedule:
    r"""UpdateCanaryRequestBodySchedule
    This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
    """
    
    duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInSeconds') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodyVisualReference:
    r"""UpdateCanaryRequestBodyVisualReference
    <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary, and optionally the parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html\"> Visual monitoring</a> and <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html\"> Visual monitoring blueprint</a> </p>
    """
    
    base_canary_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseCanaryRunId') }})
    base_screenshots: Optional[List[shared.BaseScreenshot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseScreenshots') }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBodyVpcConfig:
    r"""UpdateCanaryRequestBodyVpcConfig
    If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html\"> Running a Canary in a VPC</a>.
    """
    
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    

@dataclass_json
@dataclass
class UpdateCanaryRequestBody:
    code: Optional[UpdateCanaryRequestBodyCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    failure_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureRetentionPeriodInDays') }})
    run_config: Optional[UpdateCanaryRequestBodyRunConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfig') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeVersion') }})
    schedule: Optional[UpdateCanaryRequestBodySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    success_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessRetentionPeriodInDays') }})
    visual_reference: Optional[UpdateCanaryRequestBodyVisualReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VisualReference') }})
    vpc_config: Optional[UpdateCanaryRequestBodyVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    

@dataclass
class UpdateCanaryRequest:
    headers: UpdateCanaryHeaders = field()
    path_params: UpdateCanaryPathParams = field()
    request: UpdateCanaryRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCanaryResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_canary_response: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
