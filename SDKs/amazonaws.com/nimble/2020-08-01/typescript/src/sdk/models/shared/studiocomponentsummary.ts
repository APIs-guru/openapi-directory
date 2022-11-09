import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioComponentSubtypeEnum } from "./studiocomponentsubtypeenum";
import { StudioComponentTypeEnum } from "./studiocomponenttypeenum";


export class StudioComponentSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=studioComponentId" })
  studioComponentId?: string;

  @Metadata({ data: "json, name=subtype" })
  subtype?: StudioComponentSubtypeEnum;

  @Metadata({ data: "json, name=type" })
  type?: StudioComponentTypeEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}
