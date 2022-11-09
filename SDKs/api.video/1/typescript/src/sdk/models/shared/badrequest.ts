import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BadRequest } from "./badrequest";


export class BadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=problems", elemType: shared.BadRequest })
  problems?: BadRequest[];

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
