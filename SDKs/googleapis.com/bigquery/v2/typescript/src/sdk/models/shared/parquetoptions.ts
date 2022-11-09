import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ParquetOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableListInference" })
  enableListInference?: boolean;

  @Metadata({ data: "json, name=enumAsString" })
  enumAsString?: boolean;
}
