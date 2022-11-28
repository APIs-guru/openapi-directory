import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AvroOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=useAvroLogicalTypes" })
  useAvroLogicalTypes?: boolean;
}
