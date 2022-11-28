import { SpeakeasyBase } from "../../../internal/utils";
import { OutputDescription } from "./outputdescription";
export declare class AddApplicationOutputResponse extends SpeakeasyBase {
    applicationArn?: string;
    applicationVersionId?: number;
    outputDescriptions?: OutputDescription[];
}
