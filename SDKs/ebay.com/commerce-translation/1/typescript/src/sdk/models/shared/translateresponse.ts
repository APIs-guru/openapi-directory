import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Translation } from "./translation";



export class TranslateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=translations", elemType: Translation })
  translations?: Translation[];
}
