import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagOptionDetail } from "./tagoptiondetail";



export class DescribeTagOptionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagOptionDetail" })
  tagOptionDetail?: TagOptionDetail;
}
