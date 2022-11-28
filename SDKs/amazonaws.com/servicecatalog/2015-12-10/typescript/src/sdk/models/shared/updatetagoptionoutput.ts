import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagOptionDetail } from "./tagoptiondetail";



export class UpdateTagOptionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagOptionDetail" })
  tagOptionDetail?: TagOptionDetail;
}
