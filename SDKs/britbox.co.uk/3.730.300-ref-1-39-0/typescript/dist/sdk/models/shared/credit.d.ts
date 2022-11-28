import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreditRoleEnum {
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
export declare class Credit extends SpeakeasyBase {
    character?: string;
    name: string;
    path: string;
    role: CreditRoleEnum;
}
