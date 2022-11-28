from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetStartExportTaskActionEnum(str, Enum):
    START_EXPORT_TASK = "StartExportTask"

class GetStartExportTaskVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetStartExportTaskQueryParams:
    action: GetStartExportTaskActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    export_task_identifier: str = field(metadata={'query_param': { 'field_name': 'ExportTaskIdentifier', 'style': 'form', 'explode': True }})
    iam_role_arn: str = field(metadata={'query_param': { 'field_name': 'IamRoleArn', 'style': 'form', 'explode': True }})
    kms_key_id: str = field(metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    s3_bucket_name: str = field(metadata={'query_param': { 'field_name': 'S3BucketName', 'style': 'form', 'explode': True }})
    source_arn: str = field(metadata={'query_param': { 'field_name': 'SourceArn', 'style': 'form', 'explode': True }})
    version: GetStartExportTaskVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    export_only: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ExportOnly', 'style': 'form', 'explode': True }})
    s3_prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'S3Prefix', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStartExportTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStartExportTaskRequest:
    headers: GetStartExportTaskHeaders = field()
    query_params: GetStartExportTaskQueryParams = field()
    

@dataclass
class GetStartExportTaskResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
