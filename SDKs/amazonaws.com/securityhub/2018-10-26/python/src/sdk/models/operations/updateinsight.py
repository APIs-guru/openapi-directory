from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateInsightPathParams:
    insight_arn: str = field(metadata={'path_param': { 'field_name': 'InsightArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateInsightHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateInsightRequestBodyFilters:
    r"""UpdateInsightRequestBodyFilters
    <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
    """
    
    aws_account_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsAccountId') }})
    company_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyName') }})
    compliance_status: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceStatus') }})
    confidence: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    created_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    criticality: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Criticality') }})
    description: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    finding_provider_fields_confidence: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsConfidence') }})
    finding_provider_fields_criticality: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsCriticality') }})
    finding_provider_fields_related_findings_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsRelatedFindingsId') }})
    finding_provider_fields_related_findings_product_arn: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsRelatedFindingsProductArn') }})
    finding_provider_fields_severity_label: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsSeverityLabel') }})
    finding_provider_fields_severity_original: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsSeverityOriginal') }})
    finding_provider_fields_types: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsTypes') }})
    first_observed_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstObservedAt') }})
    generator_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeneratorId') }})
    id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    keyword: Optional[List[shared.KeywordFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keyword') }})
    last_observed_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastObservedAt') }})
    malware_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MalwareName') }})
    malware_path: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MalwarePath') }})
    malware_state: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MalwareState') }})
    malware_type: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MalwareType') }})
    network_destination_domain: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDestinationDomain') }})
    network_destination_ip_v4: Optional[List[shared.IPFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDestinationIpV4') }})
    network_destination_ip_v6: Optional[List[shared.IPFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDestinationIpV6') }})
    network_destination_port: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDestinationPort') }})
    network_direction: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDirection') }})
    network_protocol: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkProtocol') }})
    network_source_domain: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourceDomain') }})
    network_source_ip_v4: Optional[List[shared.IPFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourceIpV4') }})
    network_source_ip_v6: Optional[List[shared.IPFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourceIpV6') }})
    network_source_mac: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourceMac') }})
    network_source_port: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourcePort') }})
    note_text: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoteText') }})
    note_updated_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoteUpdatedAt') }})
    note_updated_by: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoteUpdatedBy') }})
    process_launched_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessLaunchedAt') }})
    process_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessName') }})
    process_parent_pid: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessParentPid') }})
    process_path: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessPath') }})
    process_pid: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessPid') }})
    process_terminated_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessTerminatedAt') }})
    product_arn: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductArn') }})
    product_fields: Optional[List[shared.MapFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductFields') }})
    product_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    recommendation_text: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationText') }})
    record_state: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordState') }})
    region: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    related_findings_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindingsId') }})
    related_findings_product_arn: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindingsProductArn') }})
    resource_aws_ec2_instance_iam_instance_profile_arn: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceIamInstanceProfileArn') }})
    resource_aws_ec2_instance_image_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceImageId') }})
    resource_aws_ec2_instance_ip_v4_addresses: Optional[List[shared.IPFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceIpV4Addresses') }})
    resource_aws_ec2_instance_ip_v6_addresses: Optional[List[shared.IPFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceIpV6Addresses') }})
    resource_aws_ec2_instance_key_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceKeyName') }})
    resource_aws_ec2_instance_launched_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceLaunchedAt') }})
    resource_aws_ec2_instance_subnet_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceSubnetId') }})
    resource_aws_ec2_instance_type: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceType') }})
    resource_aws_ec2_instance_vpc_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceVpcId') }})
    resource_aws_iam_access_key_created_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamAccessKeyCreatedAt') }})
    resource_aws_iam_access_key_principal_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamAccessKeyPrincipalName') }})
    resource_aws_iam_access_key_status: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamAccessKeyStatus') }})
    resource_aws_iam_access_key_user_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamAccessKeyUserName') }})
    resource_aws_iam_user_user_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamUserUserName') }})
    resource_aws_s3_bucket_owner_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsS3BucketOwnerId') }})
    resource_aws_s3_bucket_owner_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsS3BucketOwnerName') }})
    resource_container_image_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceContainerImageId') }})
    resource_container_image_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceContainerImageName') }})
    resource_container_launched_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceContainerLaunchedAt') }})
    resource_container_name: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceContainerName') }})
    resource_details_other: Optional[List[shared.MapFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceDetailsOther') }})
    resource_id: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_partition: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourcePartition') }})
    resource_region: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRegion') }})
    resource_tags: Optional[List[shared.MapFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTags') }})
    resource_type: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    severity_label: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SeverityLabel') }})
    severity_normalized: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SeverityNormalized') }})
    severity_product: Optional[List[shared.NumberFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SeverityProduct') }})
    source_url: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceUrl') }})
    threat_intel_indicator_category: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorCategory') }})
    threat_intel_indicator_last_observed_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorLastObservedAt') }})
    threat_intel_indicator_source: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorSource') }})
    threat_intel_indicator_source_url: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorSourceUrl') }})
    threat_intel_indicator_type: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorType') }})
    threat_intel_indicator_value: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorValue') }})
    title: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    type: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    updated_at: Optional[List[shared.DateFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt') }})
    user_defined_fields: Optional[List[shared.MapFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDefinedFields') }})
    verification_state: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerificationState') }})
    workflow_state: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowState') }})
    workflow_status: Optional[List[shared.StringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowStatus') }})
    

@dataclass_json
@dataclass
class UpdateInsightRequestBody:
    filters: Optional[UpdateInsightRequestBodyFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    group_by_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByAttribute') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass
class UpdateInsightRequest:
    headers: UpdateInsightHeaders = field()
    path_params: UpdateInsightPathParams = field()
    request: UpdateInsightRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateInsightResponse:
    content_type: str = field()
    status_code: int = field()
    internal_exception: Optional[Any] = field(default=None)
    invalid_access_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_insight_response: Optional[dict[str, Any]] = field(default=None)
    
