import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagOptionDetail } from "./tagoptiondetail";


export class ListTagOptionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=TagOptionDetails", elemType: shared.TagOptionDetail })
  tagOptionDetails?: TagOptionDetail[];
}
