import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceTypeEnum } from "./sourcetypeenum";


// Source
/** 
 * Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Revision" })
  revision?: string;

  @Metadata({ data: "json, name=SshKey" })
  sshKey?: string;

  @Metadata({ data: "json, name=Type" })
  type?: SourceTypeEnum;

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
