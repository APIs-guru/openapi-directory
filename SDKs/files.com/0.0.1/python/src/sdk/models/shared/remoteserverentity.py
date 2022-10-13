from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RemoteServerEntityAuthStatusEnum(str, Enum):
    NOT_APPLICABLE = "not_applicable"
    IN_SETUP = "in_setup"
    COMPLETE = "complete"
    REAUTHENTICATE = "reauthenticate"

class RemoteServerEntityOneDriveAccountTypeEnum(str, Enum):
    PERSONAL = "personal"
    BUSINESS_OTHER = "business_other"

class RemoteServerEntityServerCertificateEnum(str, Enum):
    REQUIRE_MATCH = "require_match"
    ALLOW_ANY = "allow_any"

class RemoteServerEntityServerTypeEnum(str, Enum):
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

class RemoteServerEntitySslEnum(str, Enum):
    IF_AVAILABLE = "if_available"
    REQUIRE = "require"
    REQUIRE_IMPLICIT = "require_implicit"
    NEVER = "never"


@dataclass_json
@dataclass
class RemoteServerEntity:
    auth_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_account_name' }})
    auth_setup_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_setup_link' }})
    auth_status: Optional[RemoteServerEntityAuthStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_status' }})
    authentication_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication_method' }})
    azure_blob_storage_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'azure_blob_storage_account' }})
    azure_blob_storage_container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'azure_blob_storage_container' }})
    backblaze_b2_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backblaze_b2_bucket' }})
    backblaze_b2_s3_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backblaze_b2_s3_endpoint' }})
    enable_dedicated_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_dedicated_ips' }})
    google_cloud_storage_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'google_cloud_storage_bucket' }})
    google_cloud_storage_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'google_cloud_storage_project_id' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_connections: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_connections' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    one_drive_account_type: Optional[RemoteServerEntityOneDriveAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'one_drive_account_type' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    rackspace_container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rackspace_container' }})
    rackspace_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rackspace_region' }})
    rackspace_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rackspace_username' }})
    remote_home_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote_home_path' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3_bucket' }})
    s3_compatible_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3_compatible_bucket' }})
    s3_compatible_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3_compatible_endpoint' }})
    s3_compatible_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3_compatible_region' }})
    s3_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3_region' }})
    server_certificate: Optional[RemoteServerEntityServerCertificateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_certificate' }})
    server_host_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_host_key' }})
    server_type: Optional[RemoteServerEntityServerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_type' }})
    ssl: Optional[RemoteServerEntitySslEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    wasabi_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wasabi_bucket' }})
    wasabi_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wasabi_region' }})
    
