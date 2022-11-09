import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";


export class ApiCoreDtoGroupsGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @Metadata({ data: "json, name=redirectOnly" })
  redirectOnly?: boolean;

  @Metadata({ data: "json, name=tags", elemType: shared.ApiCoreDtoTagsTag })
  tags?: ApiCoreDtoTagsTag[];

  @Metadata({ data: "json, name=writePermited" })
  writePermited?: boolean;
}
