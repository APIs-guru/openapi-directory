import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDescription } from "./inputdescription";
export declare class AddApplicationInputResponse extends SpeakeasyBase {
    applicationArn?: string;
    applicationVersionId?: number;
    inputDescriptions?: InputDescription[];
}
