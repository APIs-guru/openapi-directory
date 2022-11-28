import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDetail } from "./resourcedetail";



export class ListResourcesForTagOptionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceDetails", elemType: ResourceDetail })
  resourceDetails?: ResourceDetail[];
}
