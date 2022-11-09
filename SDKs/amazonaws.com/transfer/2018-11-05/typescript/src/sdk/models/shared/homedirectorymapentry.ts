import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HomeDirectoryMapEntry
/** 
 * <p>Represents an object that contains entries and targets for <code>HomeDirectoryMappings</code>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry:": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p> <note> <p>If the target of a logical directory entry does not exist in Amazon S3 or EFS, the entry is ignored. As a workaround, you can use the Amazon S3 API or EFS API to create 0 byte objects as place holders for your directory. If using the CLI, use the <code>s3api</code> or <code>efsapi</code> call instead of <code>s3</code> or <code>efs</code> so you can use the put-object operation. For example, you use the following: <code>aws s3api put-object --bucket bucketname --key path/to/folder/</code>. Make sure that the end of the key name ends in a <code>/</code> for it to be considered a folder.</p> </note>
**/
export class HomeDirectoryMapEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entry" })
  entry: string;

  @Metadata({ data: "json, name=Target" })
  target: string;
}
