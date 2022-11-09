import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EaseeCharger extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastSession" })
  lastSession?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
