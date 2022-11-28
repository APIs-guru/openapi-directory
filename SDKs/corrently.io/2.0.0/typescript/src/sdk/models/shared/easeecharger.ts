import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EaseeCharger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSession" })
  lastSession?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
