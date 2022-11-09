import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Triplet extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: string;

  @Metadata({ data: "json, name=mib" })
  mib?: string;

  @Metadata({ data: "json, name=scenario" })
  scenario?: number;
}
