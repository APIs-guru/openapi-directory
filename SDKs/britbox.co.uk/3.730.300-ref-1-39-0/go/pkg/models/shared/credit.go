package shared




type CreditRoleEnum string

const (
    CreditRoleEnumActor CreditRoleEnum = "actor"
CreditRoleEnumAssociateproducer CreditRoleEnum = "associateproducer"
CreditRoleEnumCoactor CreditRoleEnum = "coactor"
CreditRoleEnumDirector CreditRoleEnum = "director"
CreditRoleEnumExecutiveproducer CreditRoleEnum = "executiveproducer"
CreditRoleEnumFilminglocation CreditRoleEnum = "filminglocation"
CreditRoleEnumGuest CreditRoleEnum = "guest"
CreditRoleEnumNarrator CreditRoleEnum = "narrator"
CreditRoleEnumOther CreditRoleEnum = "other"
CreditRoleEnumPresenter CreditRoleEnum = "presenter"
CreditRoleEnumProducer CreditRoleEnum = "producer"
CreditRoleEnumProductmanager CreditRoleEnum = "productmanager"
CreditRoleEnumThememusicby CreditRoleEnum = "thememusicby"
CreditRoleEnumVoice CreditRoleEnum = "voice"
CreditRoleEnumWriter CreditRoleEnum = "writer"
)


type Credit struct {
    Character *string `json:"character,omitempty"`
    Name string `json:"name"`
    Path string `json:"path"`
    Role CreditRoleEnum `json:"role"`
    
}

