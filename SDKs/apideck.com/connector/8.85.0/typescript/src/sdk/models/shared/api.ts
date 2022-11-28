import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { ApiStatusEnum } from "./apistatusenum";



export class ApiResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excluded_from_coverage" })
  excludedFromCoverage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;
}

export enum ApiTypeEnum {
    Platform = "platform",
    Unified = "unified"
}


export class Api extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_reference_url" })
  apiReferenceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postman_collection_id" })
  postmanCollectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ApiResources })
  resources?: ApiResources[];

  @SpeakeasyMetadata({ data: "json, name=spec_url" })
  specUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ApiStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ApiTypeEnum;
}
