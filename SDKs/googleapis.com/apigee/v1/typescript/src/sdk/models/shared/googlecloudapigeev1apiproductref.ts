import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudApigeeV1ApiProductRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiproduct" })
  apiproduct?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
