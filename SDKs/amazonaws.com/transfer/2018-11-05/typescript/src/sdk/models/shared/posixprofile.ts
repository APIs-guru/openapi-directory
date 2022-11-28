import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PosixProfile
/** 
 * The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
**/
export class PosixProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Gid" })
  gid: number;

  @SpeakeasyMetadata({ data: "json, name=SecondaryGids" })
  secondaryGids?: number[];

  @SpeakeasyMetadata({ data: "json, name=Uid" })
  uid: number;
}
