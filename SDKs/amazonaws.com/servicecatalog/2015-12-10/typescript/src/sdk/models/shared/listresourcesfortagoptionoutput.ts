import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceDetail } from "./resourcedetail";


export class ListResourcesForTagOptionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=ResourceDetails", elemType: shared.ResourceDetail })
  resourceDetails?: ResourceDetail[];
}
