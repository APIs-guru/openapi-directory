import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";



export class ApiCoreDtoGroupsGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirectOnly" })
  redirectOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ApiCoreDtoTagsTag })
  tags?: ApiCoreDtoTagsTag[];

  @SpeakeasyMetadata({ data: "json, name=writePermited" })
  writePermited?: boolean;
}
