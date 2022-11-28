import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ParquetOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableListInference" })
  enableListInference?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enumAsString" })
  enumAsString?: boolean;
}
