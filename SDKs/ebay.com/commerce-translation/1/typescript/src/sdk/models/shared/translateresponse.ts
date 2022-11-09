import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Translation } from "./translation";


export class TranslateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=translations", elemType: shared.Translation })
  translations?: Translation[];
}
