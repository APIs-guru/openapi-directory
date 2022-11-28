from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HomeDirectoryMapEntry:
    r"""HomeDirectoryMapEntry
    <p>Represents an object that contains entries and targets for <code>HomeDirectoryMappings</code>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { \"Entry:\": \"/\", \"Target\": \"/bucket_name/home/mydirectory\" } ]</code> </p> <note> <p>If the target of a logical directory entry does not exist in Amazon S3 or EFS, the entry is ignored. As a workaround, you can use the Amazon S3 API or EFS API to create 0 byte objects as place holders for your directory. If using the CLI, use the <code>s3api</code> or <code>efsapi</code> call instead of <code>s3</code> or <code>efs</code> so you can use the put-object operation. For example, you use the following: <code>aws s3api put-object --bucket bucketname --key path/to/folder/</code>. Make sure that the end of the key name ends in a <code>/</code> for it to be considered a folder.</p> </note>
    """
    
    entry: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entry') }})
    target: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    
