import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreditRoleEnum {
    Actor = "actor",
    Associateproducer = "associateproducer",
    Coactor = "coactor",
    Director = "director",
    Executiveproducer = "executiveproducer",
    Filminglocation = "filminglocation",
    Guest = "guest",
    Narrator = "narrator",
    Other = "other",
    Presenter = "presenter",
    Producer = "producer",
    Productmanager = "productmanager",
    Thememusicby = "thememusicby",
    Voice = "voice",
    Writer = "writer"
}


export class Credit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=character" })
  character?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: CreditRoleEnum;
}
