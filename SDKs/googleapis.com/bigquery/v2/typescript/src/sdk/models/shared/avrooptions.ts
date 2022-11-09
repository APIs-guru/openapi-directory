import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AvroOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=useAvroLogicalTypes" })
  useAvroLogicalTypes?: boolean;
}
