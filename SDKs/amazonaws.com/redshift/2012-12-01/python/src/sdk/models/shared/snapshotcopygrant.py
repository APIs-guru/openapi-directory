from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SnapshotCopyGrant:
    r"""SnapshotCopyGrant
    <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from Amazon Web Services KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href=\"https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html\">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
    """
    
    kms_key_id: Optional[str] = field(default=None)
    snapshot_copy_grant_name: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
