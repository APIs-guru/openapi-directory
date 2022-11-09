import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Translation } from "./translation";

export enum MediaTypeEnum {
    Screenshot = "SCREENSHOT"
,    Video = "VIDEO"
}


export class Media extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=translations", elemType: shared.Translation })
  translations?: Translation[];

  @Metadata({ data: "json, name=type" })
  type?: MediaTypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}
