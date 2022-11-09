import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagOptionDetail } from "./tagoptiondetail";


export class DescribeTagOptionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TagOptionDetail" })
  tagOptionDetail?: TagOptionDetail;
}
