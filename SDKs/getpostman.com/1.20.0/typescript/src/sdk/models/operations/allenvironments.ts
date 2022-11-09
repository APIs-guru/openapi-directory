import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllEnvironments200ApplicationJsonEnvironments extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class AllEnvironments200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: operations.AllEnvironments200ApplicationJsonEnvironments })
  environments?: AllEnvironments200ApplicationJsonEnvironments[];
}


export class AllEnvironmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  allEnvironments200ApplicationJsonObject?: AllEnvironments200ApplicationJson;
}
