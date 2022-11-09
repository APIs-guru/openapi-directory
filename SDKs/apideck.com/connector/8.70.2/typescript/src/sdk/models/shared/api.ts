import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { ApiStatusEnum } from "./apistatusenum";


export class ApiResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=excluded_from_coverage" })
  excludedFromCoverage?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;
}

export enum ApiTypeEnum {
    Platform = "platform"
,    Unified = "unified"
}


export class Api extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_reference_url" })
  apiReferenceUrl?: string;

  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=postman_collection_id" })
  postmanCollectionId?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.ApiResources })
  resources?: ApiResources[];

  @Metadata({ data: "json, name=spec_url" })
  specUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: ApiStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: ApiTypeEnum;
}
