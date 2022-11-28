import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationUpdate } from "./applicationupdate";
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    applicationName: string;
    applicationUpdate: ApplicationUpdate;
    currentApplicationVersionId: number;
}
