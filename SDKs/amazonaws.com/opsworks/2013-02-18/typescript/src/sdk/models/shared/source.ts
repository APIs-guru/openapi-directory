import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



// Source
/** 
 * Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=SshKey" })
  sshKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
