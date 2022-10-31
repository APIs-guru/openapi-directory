package shared



type PhotoComments struct {
    Content *string `json:"_content,omitempty"`
    
}

type PhotoDates struct {
    Lastupdate *string `json:"lastupdate,omitempty"`
    Posted *string `json:"posted,omitempty"`
    Taken *string `json:"taken,omitempty"`
    Takengranularity *string `json:"takengranularity,omitempty"`
    Takenunknown *bool `json:"takenunknown,omitempty"`
    
}

type PhotoDescription struct {
    Content *string `json:"_content,omitempty"`
    
}

type PhotoEditability struct {
    Canaddmeta *bool `json:"canaddmeta,omitempty"`
    Cancomment *bool `json:"cancomment,omitempty"`
    
}

type PhotoNotes struct {
    Note []Note `json:"note,omitempty"`
    
}

type PhotoPeople struct {
    Haspeople *bool `json:"haspeople,omitempty"`
    
}

type PhotoPermissions struct {
    Permaddmeta *string `json:"permaddmeta,omitempty"`
    Permcomment *string `json:"permcomment,omitempty"`
    
}

type PhotoPubliceditability struct {
    Canaddmeta *bool `json:"canaddmeta,omitempty"`
    Cancomment *bool `json:"cancomment,omitempty"`
    
}

type PhotoTags struct {
    Tag []Tag `json:"tag,omitempty"`
    
}

type PhotoTitle struct {
    Content *string `json:"_content,omitempty"`
    
}

type PhotoUrls struct {
    URL []URL `json:"url,omitempty"`
    
}

type PhotoUsage struct {
    Canblog *bool `json:"canblog,omitempty"`
    Candownload *bool `json:"candownload,omitempty"`
    Canprint *bool `json:"canprint,omitempty"`
    Canshare *bool `json:"canshare,omitempty"`
    
}

type PhotoVisibility struct {
    Isfamily *bool `json:"isfamily,omitempty"`
    Isfriend *bool `json:"isfriend,omitempty"`
    Ispublic *bool `json:"ispublic,omitempty"`
    
}

type Photo struct {
    Comments *PhotoComments `json:"comments,omitempty"`
    Dates *PhotoDates `json:"dates,omitempty"`
    Dateuploaded *string `json:"dateuploaded,omitempty"`
    Description *PhotoDescription `json:"description,omitempty"`
    Editability *PhotoEditability `json:"editability,omitempty"`
    Farm *string `json:"farm,omitempty"`
    ID *string `json:"id,omitempty"`
    Isfavorite *bool `json:"isfavorite,omitempty"`
    License *string `json:"license,omitempty"`
    Media *string `json:"media,omitempty"`
    Notes *PhotoNotes `json:"notes,omitempty"`
    Originalsecret *string `json:"originalsecret,omitempty"`
    Owner *Owner `json:"owner,omitempty"`
    People *PhotoPeople `json:"people,omitempty"`
    Permissions *PhotoPermissions `json:"permissions,omitempty"`
    Publiceditability *PhotoPubliceditability `json:"publiceditability,omitempty"`
    Rotation *string `json:"rotation,omitempty"`
    Safe *bool `json:"safe,omitempty"`
    SafetyLevel *string `json:"safety_level,omitempty"`
    Secret *string `json:"secret,omitempty"`
    Server *string `json:"server,omitempty"`
    Tags *PhotoTags `json:"tags,omitempty"`
    Title *PhotoTitle `json:"title,omitempty"`
    Urls *PhotoUrls `json:"urls,omitempty"`
    Usage *PhotoUsage `json:"usage,omitempty"`
    Views *string `json:"views,omitempty"`
    Visibility *PhotoVisibility `json:"visibility,omitempty"`
    
}

