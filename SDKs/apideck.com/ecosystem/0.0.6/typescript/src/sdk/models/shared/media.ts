import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Translation } from "./translation";


export enum MediaTypeEnum {
    Screenshot = "SCREENSHOT",
    Video = "VIDEO"
}


export class Media extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=translations", elemType: Translation })
  translations?: Translation[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MediaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
