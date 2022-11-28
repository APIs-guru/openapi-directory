import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllEnvironments200ApplicationJsonEnvironments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class AllEnvironments200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: AllEnvironments200ApplicationJsonEnvironments })
  environments?: AllEnvironments200ApplicationJsonEnvironments[];
}


export class AllEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  allEnvironments200ApplicationJsonObject?: AllEnvironments200ApplicationJson;
}
