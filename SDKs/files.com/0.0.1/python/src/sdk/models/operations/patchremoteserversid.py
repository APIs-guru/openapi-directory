from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PatchRemoteServersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchRemoteServersIDRequestBodyOneDriveAccountTypeEnum(str, Enum):
    PERSONAL = "personal"
    BUSINESS_OTHER = "business_other"

class PatchRemoteServersIDRequestBodyServerCertificateEnum(str, Enum):
    REQUIRE_MATCH = "require_match"
    ALLOW_ANY = "allow_any"

class PatchRemoteServersIDRequestBodyServerTypeEnum(str, Enum):
    FTP = "ftp"
    SFTP = "sftp"
    S3 = "s3"
    GOOGLE_CLOUD_STORAGE = "google_cloud_storage"
    WEBDAV = "webdav"
    WASABI = "wasabi"
    BACKBLAZE_B2 = "backblaze_b2"
    ONE_DRIVE = "one_drive"
    RACKSPACE = "rackspace"
    BOX = "box"
    DROPBOX = "dropbox"
    GOOGLE_DRIVE = "google_drive"
    AZURE = "azure"
    SHAREPOINT = "sharepoint"
    S3_COMPATIBLE = "s3_compatible"

class PatchRemoteServersIDRequestBodySslEnum(str, Enum):
    IF_AVAILABLE = "if_available"
    REQUIRE = "require"
    REQUIRE_IMPLICIT = "require_implicit"
    NEVER = "never"


@dataclass
class PatchRemoteServersIDRequestBody:
    aws_access_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'aws_access_key' }})
    aws_secret_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'aws_secret_key' }})
    azure_blob_storage_access_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'azure_blob_storage_access_key' }})
    azure_blob_storage_account: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'azure_blob_storage_account' }})
    azure_blob_storage_container: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'azure_blob_storage_container' }})
    backblaze_b2_application_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'backblaze_b2_application_key' }})
    backblaze_b2_bucket: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'backblaze_b2_bucket' }})
    backblaze_b2_key_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'backblaze_b2_key_id' }})
    backblaze_b2_s3_endpoint: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'backblaze_b2_s3_endpoint' }})
    enable_dedicated_ips: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'enable_dedicated_ips' }})
    google_cloud_storage_bucket: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'google_cloud_storage_bucket' }})
    google_cloud_storage_credentials_json: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'google_cloud_storage_credentials_json' }})
    google_cloud_storage_project_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'google_cloud_storage_project_id' }})
    hostname: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'hostname' }})
    max_connections: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'max_connections' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    one_drive_account_type: Optional[PatchRemoteServersIDRequestBodyOneDriveAccountTypeEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'one_drive_account_type' }})
    password: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'port' }})
    private_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'private_key' }})
    rackspace_api_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'rackspace_api_key' }})
    rackspace_container: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'rackspace_container' }})
    rackspace_region: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'rackspace_region' }})
    rackspace_username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'rackspace_username' }})
    reset_authentication: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'reset_authentication' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 's3_bucket' }})
    s3_compatible_access_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 's3_compatible_access_key' }})
    s3_compatible_bucket: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 's3_compatible_bucket' }})
    s3_compatible_endpoint: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 's3_compatible_endpoint' }})
    s3_compatible_region: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 's3_compatible_region' }})
    s3_compatible_secret_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 's3_compatible_secret_key' }})
    s3_region: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 's3_region' }})
    server_certificate: Optional[PatchRemoteServersIDRequestBodyServerCertificateEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'server_certificate' }})
    server_host_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'server_host_key' }})
    server_type: Optional[PatchRemoteServersIDRequestBodyServerTypeEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'server_type' }})
    ssl: Optional[PatchRemoteServersIDRequestBodySslEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'ssl' }})
    ssl_certificate: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ssl_certificate' }})
    username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    wasabi_access_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'wasabi_access_key' }})
    wasabi_bucket: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'wasabi_bucket' }})
    wasabi_region: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'wasabi_region' }})
    wasabi_secret_key: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'wasabi_secret_key' }})
    

@dataclass
class PatchRemoteServersIDRequest:
    path_params: PatchRemoteServersIDPathParams = field(default=None)
    request: Optional[PatchRemoteServersIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchRemoteServersIDResponse:
    content_type: str = field(default=None)
    remote_server_entity: Optional[shared.RemoteServerEntity] = field(default=None)
    status_code: int = field(default=None)
    
