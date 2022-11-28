import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { TerminologyData } from "./terminologydata";



export class ImportTerminologyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: EncryptionKey;

  @SpeakeasyMetadata({ data: "json, name=MergeStrategy" })
  mergeStrategy: MergeStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=TerminologyData" })
  terminologyData: TerminologyData;
}
