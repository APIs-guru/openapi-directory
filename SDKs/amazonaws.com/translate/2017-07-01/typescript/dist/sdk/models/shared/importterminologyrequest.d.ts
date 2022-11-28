import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { TerminologyData } from "./terminologydata";
export declare class ImportTerminologyRequest extends SpeakeasyBase {
    description?: string;
    encryptionKey?: EncryptionKey;
    mergeStrategy: MergeStrategyEnum;
    name: string;
    terminologyData: TerminologyData;
}
