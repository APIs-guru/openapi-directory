import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PhotoUrLs extends SpeakeasyBase {
  @Metadata({ data: "json, name=h" })
  h?: string;

  @Metadata({ data: "json, name=l" })
  l?: string;

  @Metadata({ data: "json, name=s" })
  s?: string;

  @Metadata({ data: "json, name=t" })
  t?: string;
}
