import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionKey } from "./encryptionkey";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { TerminologyData } from "./terminologydata";


export class ImportTerminologyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: EncryptionKey;

  @Metadata({ data: "json, name=MergeStrategy" })
  mergeStrategy: MergeStrategyEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=TerminologyData" })
  terminologyData: TerminologyData;
}
