import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionKey } from "./encryptionkey";
import { ParallelDataConfig } from "./paralleldataconfig";


export class CreateParallelDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: EncryptionKey;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ParallelDataConfig" })
  parallelDataConfig: ParallelDataConfig;
}
