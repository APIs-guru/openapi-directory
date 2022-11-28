import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartSessionRequest extends SpeakeasyBase {
    documentName?: string;
    parameters?: Map<string, string[]>;
    target: string;
}
