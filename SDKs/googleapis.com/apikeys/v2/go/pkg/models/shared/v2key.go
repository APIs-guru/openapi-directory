package shared



type V2Key struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DeleteTime *string `json:"deleteTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    KeyString *string `json:"keyString,omitempty"`
    Name *string `json:"name,omitempty"`
    Restrictions *V2Restrictions `json:"restrictions,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

