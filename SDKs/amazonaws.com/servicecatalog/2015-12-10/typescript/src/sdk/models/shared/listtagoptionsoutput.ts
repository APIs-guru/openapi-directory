import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagOptionDetail } from "./tagoptiondetail";



export class ListTagOptionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TagOptionDetails", elemType: TagOptionDetail })
  tagOptionDetails?: TagOptionDetail[];
}
