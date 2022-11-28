import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
**/
export declare class Source extends SpeakeasyBase {
    password?: string;
    revision?: string;
    sshKey?: string;
    type?: SourceTypeEnum;
    url?: string;
    username?: string;
}
